# GitLab CI to GitHub Actions Demo

This project demonstrates migrating a GitLab CI pipeline to GitHub Actions.

## Project Structure

- `index.js` - Simple add function for demonstration
- `test.js` - Basic test for the add function
- `build.js` - Build script that creates dist/index.txt
- `scripts/deploy.sh` - Demo deployment script
- `.github/workflows/ci.yml` - GitHub Actions CI pipeline

## Running Locally

1. Install dependencies: `npm install`
2. Build the project: `npm run build`
3. Run tests: `npm test`

## CI Pipeline

The GitHub Actions workflow includes:
- **Build**: Install dependencies and create build artifacts
- **Test**: Run the test suite
- **Deploy**: Execute deployment script (main branch only)
