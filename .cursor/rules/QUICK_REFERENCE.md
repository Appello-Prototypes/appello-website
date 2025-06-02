# 🚀 QUICK REFERENCE - Critical Rules

## ⚠️ BEFORE EVERY SESSION
- [ ] Check Node.js version: `node --version` (need 18.18.0+)
- [ ] Verify working directory: `/Users/coreyshelson/appello-website`
- [ ] Never work in `website/` subdirectory (deleted)

## 🔒 SECURITY RULES
- **NEVER commit `.cursor/mcp.json`** (contains API keys)
- **No git operations without explicit approval**
- Check `.gitignore` before first commit

## 🛠️ DEVELOPMENT WORKFLOW
1. Start: `npm run dev` (from root only)
2. Components: `npx shadcn@latest add [component]`
3. Test: `npm run build` (before committing)
4. Deploy: `git add . && git commit -m "..." && git push origin main`

## 🎯 ATLAS USAGE
- **ONE question per query** (will timeout otherwise)
- ✅ "What is Appello?"
- ❌ "What is Appello, include customers, pricing, and strategy"

## 📋 TASKMASTER ESSENTIALS
- Always use: `projectRoot: "/Users/coreyshelson/appello-website"`
- Operations from root directory only
- Use research mode for content tasks

## 🚨 EMERGENCY FIXES
### ESLint Errors
```js
// eslint.config.mjs
{
  rules: {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars": "off"
  }
}
```

### Missing Dependencies
```bash
npm install @radix-ui/react-label
```

### Node Version Fix
```bash
nvm use 22.16.0
```

## ✅ SUCCESS CHECKLIST
- [ ] Clean local build passes
- [ ] All components installed
- [ ] No sensitive data in commits
- [ ] ESLint rules configured
- [ ] Working from correct directory 