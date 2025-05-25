1. If you add new color please add it to the global.css as var. Use hsl format and add the rgb and hex.
2. in tailwind config add use rule: once you add the color in css file, say, `--muted-foreground` then use the pattern:

` muted: {
          foreground: "hsl(var(--muted-foreground))",
},`

for default color (e.g. if you defined it as simply `--muted`) in tailwind add:
` muted: {
          DEFAULT: "hsl(var(--muted))",
},`
