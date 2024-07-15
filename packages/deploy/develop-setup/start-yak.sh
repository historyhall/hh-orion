#!/usr/bin/env bash

SOURCE=${BASH_SOURCE[0]}
while [ -L "$SOURCE" ]; do # resolve $SOURCE until the file is no longer a symlink
  DIR=$( cd -P "$( dirname "$SOURCE" )" >/dev/null 2>&1 && pwd )
  SOURCE=$(readlink "$SOURCE")
  [[ $SOURCE != /* ]] && SOURCE=$DIR/$SOURCE # if $SOURCE was a relative symlink, we need to resolve it relative to the path where the symlink file was located
done
DIR=$( cd -P "$( dirname "$SOURCE" )/.." >/dev/null 2>&1 && pwd )

LCYAN='\033[1;36m'
NC='\033[0m'

source "$DIR/develop-setup/lib/yaklib.sh"

show_help () {
  printf "${LCYAN}Yakuake Script${NC}\n\n"
  printf "Usage:  yak.sh [COMMAND]\n\n"
	printf "A helper script for opening dev environments in yakuake\n\n"
	printf "Commands:\n"
	printf "  close      Close all tabs starting with the word HH\n"
	printf "  core       Build/run core packages: domain, server, web\n"
	printf "\n"
}

core () {
  local tid
  tid=$(newTabWithNamePath "HH Web" "$DIR")
  runCommand $tid "cd ../web && yarn start"
  tid=$(newTabWithNamePath "HH Schema" "$DIR")
  runCommand $tid "cd ../schema && yarn start"
  tid=$(newTabWithNamePath "HH Domain" "$DIR")
  runCommand $tid "cd ../domain && yarn start"
  tid=$(newTabWithNamePath "HH Server" "$DIR")
  runCommand $tid "cd ../server && yarn start"
  tid=$(newTabWithNamePath "HH Migrate" "$DIR")
  runCommand $tid "cd ../migrate"
}

close () {
  local sessions
  getSessions sessions
  for el in "${sessions[@]}"; do
    closeTabIfNameMatches "$el" "^HH.*"
  done
}

case "$1" in
  "core")
    core
    exit 0;
  ;;
  "coreplus")
    coreplus
    exit 0;
  ;;
  "server")
    server
    exit 0;
  ;;
  "close")
    close
    exit 0;
  ;;
  *)
    show_help
  ;;
esac
