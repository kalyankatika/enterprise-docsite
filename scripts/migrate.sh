#!/bin/bash

# Enterprise Documentation System Migration Script
# This script provides a command-line interface for the migration process

# Text formatting
BOLD="\033[1m"
GREEN="\033[0;32m"
BLUE="\033[0;34m"
YELLOW="\033[0;33m"
RED="\033[0;31m"
RESET="\033[0m"

# Script directory
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )"

# Default values
CONFIG_FILE="$SCRIPT_DIR/migration-config.js"
TEST_MODE=false
SOURCE_REPO=""
REPORT_ONLY=false
SKIP_BUILD=false
VERBOSE=false

# Display banner
echo -e "${BLUE}${BOLD}"
echo "  ____________________"
echo " /                    \\"
echo " |  EDS Migration Tool |"
echo " \\____________________/"
echo -e "${RESET}"

# Parse command line arguments
while [[ $# -gt 0 ]]; do
  key="$1"
  case $key in
    --config=*)
      CONFIG_FILE="${key#*=}"
      shift
      ;;
    --test)
      TEST_MODE=true
      shift
      ;;
    --source=*)
      SOURCE_REPO="${key#*=}"
      shift
      ;;
    --report-only)
      REPORT_ONLY=true
      shift
      ;;
    --skip-build)
      SKIP_BUILD=true
      shift
      ;;
    --verbose)
      VERBOSE=true
      shift
      ;;
    -h|--help)
      echo -e "${BOLD}Usage:${RESET}"
      echo "  ./migrate.sh [options]"
      echo ""
      echo -e "${BOLD}Options:${RESET}"
      echo "  --config=FILE       Use specified config file (default: migration-config.js)"
      echo "  --test              Run in test mode with sample files"
      echo "  --source=REPO       Specify a single source repository to migrate"
      echo "  --report-only       Only generate migration report without migrating"
      echo "  --skip-build        Skip building the site after migration"
      echo "  --verbose           Show detailed output during migration"
      echo "  -h, --help          Show this help message"
      echo ""
      exit 0
      ;;
    *)
      echo -e "${RED}Unknown option: $key${RESET}"
      echo "Use --help to see available options"
      exit 1
      ;;
  esac
done

# Check Node.js
if ! command -v node &> /dev/null; then
  echo -e "${RED}${BOLD}Error: Node.js is not installed.${RESET}"
  echo "Please install Node.js 14+ and try again."
  exit 1
fi

# Check config file
if [ ! -f "$CONFIG_FILE" ] && [ "$TEST_MODE" = false ]; then
  echo -e "${RED}${BOLD}Error: Config file not found: $CONFIG_FILE${RESET}"
  echo "Please ensure the configuration file exists or use --test for test mode."
  exit 1
fi

# Step 1: Prepare migration arguments
args=""
if [ "$TEST_MODE" = true ]; then
  echo -e "${YELLOW}Running in test mode...${RESET}"
  args="--test"
elif [ -n "$SOURCE_REPO" ]; then
  echo -e "${YELLOW}Migrating single repository: $SOURCE_REPO${RESET}"
  args="--source=$SOURCE_REPO"
fi

if [ "$REPORT_ONLY" = true ]; then
  args="$args --report-only"
fi

if [ "$VERBOSE" = true ]; then
  args="$args --verbose"
fi

# Step 2: Run the migration
if [ "$TEST_MODE" = true ]; then
  echo -e "${BLUE}${BOLD}Starting test migration...${RESET}"
  node "$SCRIPT_DIR/run-migration-test.js" $args
  MIGRATION_RESULT=$?
else
  echo -e "${BLUE}${BOLD}Starting migration process...${RESET}"
  node "$SCRIPT_DIR/quick-migrate.js" --config="$CONFIG_FILE" $args
  MIGRATION_RESULT=$?
fi

# Check migration result
if [ $MIGRATION_RESULT -ne 0 ]; then
  echo -e "${RED}${BOLD}Migration failed!${RESET}"
  echo "Check the console output above for errors."
  exit $MIGRATION_RESULT
fi

echo -e "${GREEN}${BOLD}Migration completed successfully!${RESET}"

# Step 3: Build the site (unless skipped)
if [ "$SKIP_BUILD" = false ] && [ "$REPORT_ONLY" = false ]; then
  echo -e "${BLUE}${BOLD}Building the site...${RESET}"
  cd "$SCRIPT_DIR/.." || exit
  npx @11ty/eleventy
  BUILD_RESULT=$?
  
  if [ $BUILD_RESULT -ne 0 ]; then
    echo -e "${RED}${BOLD}Site build failed!${RESET}"
    echo "Check the console output above for errors."
    exit $BUILD_RESULT
  fi
  
  echo -e "${GREEN}${BOLD}Site built successfully!${RESET}"
fi

# Step 4: Display instructions
echo ""
echo -e "${BOLD}Next steps:${RESET}"
echo "1. View the migration report in: src/migrated/migration-report.md"
echo "2. Start the development server (if not already running):"
echo "   npx @11ty/eleventy --serve"
echo "3. Browse the migrated content at: http://localhost:5000/migrated/"
echo ""
echo -e "${GREEN}${BOLD}Migration process complete!${RESET}"