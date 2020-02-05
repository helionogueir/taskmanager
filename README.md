# [Task Manager](https://github.com/helionogueir/taskmanager)
All instruction below was executed at Linux OS.
Remember! You need cloning [git](https://github.com/helionogueir/taskmanager) repository and  must have installed [docker](https://docs.docker.com/install/#supported-platforms), [docker-compose](https://docs.docker.com/compose/install/) and [make](https://www.gnu.org/software/make/) in your OS.

---

## Get Start

### SetUp
```bash
mkdir -p "${HOME}/workspace"
cd "${HOME}/workspace"
git clone https://github.com/helionogueir/taskmanager.git
```

## Commands

***Obs! For executed all commands below, you will need access the folder***
```bash
cd "${HOME}/workspace/taskmanager"
```

### Up
```bash
# Start application and show logs
make up
#
make
```

### Down
```bash
# Stop application
make down
```

### Restart
```bash
# Restart application
make restart
```

### Logs
```bash
# Show Environment(s) LOGs
make logs
```

### Reset
```bash
# Reset environment and database data.
make reset
```

### Bash
```bash
# Connect container bash.
make bash
```

### Build
```bash
# Build frontend application.
make build
```

### Lint
```bash
# Execute lint.
make up
make lint
```

### Unit Tests
```bash
# Execute unit tests
make up
make test.unit
```

### Unit Tests Verbose
```bash
# Execute unit tests verbose
make up
make test.unit.verbose
```

### Unit Tests Coverage
```bash
# Execute unit tests Coverage
make up
make test.unit.coverage
```
