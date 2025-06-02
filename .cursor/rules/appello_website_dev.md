# Appello Website Development Rules & Lessons Learned

## 🏗️ PROJECT STRUCTURE RULES

### Critical Directory Structure
- **NEVER create nested Next.js projects** (learned from website/ subdirectory confusion)
- **Root directory ONLY**: All Next.js development happens at project root
- **TaskMaster operations**: Always use absolute path to project root
- **Git operations**: Only at root level, never in subdirectories

### File Organization
```
/Users/coreyshelson/appello-website/
├── app/                    # Next.js 14 app directory
├── components/ui/          # shadcn/ui components
├── lib/                    # Utilities
├── tasks/                  # TaskMaster task files
├── scripts/                # PRD, complexity reports
├── .cursor/                # Cursor configuration (NEVER commit)
├── eslint.config.mjs       # ESLint configuration (flat config)
└── package.json            # Dependencies
```

## 🔒 SECURITY RULES

### Git Security Protocol
- **NEVER commit `.cursor/mcp.json`** - Contains API keys
- Always add sensitive files to `.gitignore` BEFORE first commit
- If API keys accidentally committed: remove from git tracking, clean history
- **Rule**: No git operations without explicit human approval

### API Key Management
- Store API keys only in `.cursor/mcp.json`
- Use environment variables for production
- Never reference API keys in code comments or documentation

## 🛠️ TECHNICAL REQUIREMENTS

### Node.js Version Management
- **Minimum**: Node.js v18.18.0+ (Next.js requirement)
- **Recommended**: Use nvm to manage versions
- **Command**: `nvm use 22.16.0` (or latest stable)
- Check version before starting: `node --version`

### ESLint Configuration
- Use **flat config** (`eslint.config.mjs`) for Next.js 15+
- Disable problematic rules for deployment:
  ```js
  {
    rules: {
      "react/no-unescaped-entities": "off",
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
  ```
- Test builds locally before pushing: `npm run build`

### Component Dependencies
- Install shadcn/ui components as needed: `npx shadcn@latest add [component]`
- Required for current project: `input textarea label card button`
- Always install from correct directory (project root)

## 🔄 WORKFLOW PATTERNS

### Development Workflow
1. **Start**: Check Node.js version, ensure correct directory
2. **Dependencies**: Install/update as needed
3. **Development**: `npm run dev` (from root)
4. **Components**: Add shadcn/ui components when needed
5. **Testing**: Build locally before commit
6. **Commit**: Stage, commit, push (with approval)

### TaskMaster Integration
- **Initialize**: Use absolute path to project root
- **Operations**: Always specify `projectRoot` parameter
- **File paths**: Use relative paths within project for task files
- **Models**: Set appropriate models for different operations

### Deployment Process
1. Ensure clean ESLint build: `npm run build`
2. Verify all dependencies installed
3. Test locally first
4. Git add, commit, push triggers Vercel deployment
5. Monitor Vercel dashboard for build status

## 📝 CODE QUALITY RULES

### React/Next.js Best Practices
- Use TypeScript for all new files
- Follow Next.js 14 app directory conventions
- Implement proper SEO with metadata
- Use semantic HTML with proper ARIA labels
- Mobile-first responsive design

### Component Structure
- Use shadcn/ui for UI components
- Implement proper form handling
- Include loading states and error boundaries
- Follow accessibility guidelines

### Content Strategy
- Problem-focused messaging for contractor audience
- Include specific pain points and cost calculations
- Use social proof and case studies
- Strong conversion psychology throughout

## 🚨 COMMON PITFALLS TO AVOID

### Directory Confusion
- ❌ Never work in website/ subdirectory
- ❌ Never create nested Next.js projects
- ✅ Always verify working directory before operations

### Git Issues
- ❌ Don't commit sensitive configuration files
- ❌ Don't push without testing build locally
- ✅ Always use proper .gitignore

### Deployment Failures
- ❌ Don't ignore ESLint errors
- ❌ Don't use unsupported Node.js versions
- ✅ Test build process before pushing

### Component Issues
- ❌ Don't reference components without installing
- ❌ Don't mix component libraries
- ✅ Install dependencies as needed

## 🎯 PROJECT-SPECIFIC CONTEXT

### Target Audience
- Mechanical, electrical, specialty contractors
- 5-100+ employees
- Currently using Excel/paper timesheets
- Pain points: payroll errors, job costing, compliance

### Conversion Strategy
- Problem-focused landing pages
- Specific cost calculations ($142K annual loss)
- Real case studies (Martinez HVAC)
- Strong CTAs for demo requests

### Technical Stack
- Next.js 14 with app directory
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Vercel deployment
- TaskMaster project management

## 📊 SUCCESS METRICS

### Completed Features
✅ Pain point landing page (/time-tracking-contractors)
✅ Contact/demo request page (/contact)
✅ Responsive design with conversion optimization
✅ Clean deployment pipeline
✅ TaskMaster integration

### Remaining Tasks
- Industry-specific pages
- Features/benefits page
- Pricing page
- Homepage optimization
- Analytics implementation 