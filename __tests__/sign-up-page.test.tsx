import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { NextIntlClientProvider } from "next-intl"

import SignUpPage from "@/app/(auth)/sign-up/page"

// Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => "ukr",
}))

// Mock react-hook-form
jest.mock("react-hook-form", () => ({
  ...jest.requireActual("react-hook-form"),
  useForm: () => ({
    handleSubmit: jest.fn(),
    control: {},
    formState: { errors: {} },
    register: jest.fn(),
  }),
}))

// Mock next/navigation
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}))

describe("SignUpPage", () => {
  const renderComponent = () => {
    return render(
      <NextIntlClientProvider locale="ukr" messages={{}}>
        <SignUpPage />
      </NextIntlClientProvider>
    )
  }

  it("renders all required form fields", () => {
    renderComponent()

    // Check input fields
    const firstNameInput = screen.getByPlaceholderText("Введіть ім'я")
    const lastNameInput = screen.getByPlaceholderText("Введіть прізвище")
    const phoneNumberInput = screen.getByPlaceholderText("(0XX) XXX XX XX")
    const emailInput = screen.getByPlaceholderText("Введіть email")
    const passwordInput = screen.getByPlaceholderText("Введіть пароль")
    const confirmPasswordInput =
      screen.getByPlaceholderText("Підтвердіть пароль")

    // Check date of birth button
    const dateOfBirthButton = screen.getByText("Дата народження")

    // Check gender select
    const genderSelect = screen.getByText("Оберіть стать")

    // Check submit button
    const submitButton = screen.getByText("Зареєструватися")

    // Assertions
    expect(firstNameInput).toBeInTheDocument()
    expect(lastNameInput).toBeInTheDocument()
    expect(phoneNumberInput).toBeInTheDocument()
    expect(emailInput).toBeInTheDocument()
    expect(passwordInput).toBeInTheDocument()
    expect(confirmPasswordInput).toBeInTheDocument()
    expect(dateOfBirthButton).toBeInTheDocument()
    expect(genderSelect).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()
  })

  it("displays validation errors for empty fields", async () => {
    const user = userEvent.setup()
    renderComponent()

    // Find submit button and click
    const submitButton = screen.getByText("Зареєструватися")
    await user.click(submitButton)

    // Check for validation error messages
    const errorMessages = [
      "Ім'я має містити щонайменше 2 символи",
      "Прізвище має містити щонайменше 2 символи",
      "Введіть коректний український номер телефону (0XX) XXX XX XX",
      "Введіть коректний email",
      "Пароль повинен містити щонайменше 8 символів",
      "Оберіть дату народження",
      "Оберіть стать",
    ]

    errorMessages.forEach((message) => {
      const errorElement = screen.getByText(message)
      expect(errorElement).toBeInTheDocument()
    })
  })

  it("validates password complexity", async () => {
    const user = userEvent.setup()
    renderComponent()

    const passwordInput = screen.getByPlaceholderText("Введіть пароль")
    const submitButton = screen.getByText("Зареєструватися")

    // Test weak passwords
    const weakPasswords = [
      "short",
      "onlylowercase",
      "ONLYUPPERCASE",
      "12345678",
      "passwordpassword",
    ]

    for (const password of weakPasswords) {
      await user.type(passwordInput, password)
      await user.click(submitButton)

      const complexityErrors = [
        "Пароль повинен містити принаймні одну велику літеру",
        "Пароль повинен містити принаймні одну малу літеру",
        "Пароль повинен містити принаймні одну цифру",
        "Пароль повинен містити принаймні один спеціальний символ",
      ]

      complexityErrors.forEach((message) => {
        const errorElement = screen.getByText(message)
        expect(errorElement).toBeInTheDocument()
      })
    }
  })
})
