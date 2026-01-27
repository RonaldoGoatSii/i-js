# g-docker

Minimal Docker + Nginx example that serves the static files in `src/`.

## What it does

- Builds a Docker image based on `nginx`
- Copies `./src` into Nginx’s default web root (`/usr/share/nginx/html`)
- Exposes port `80` inside the container

## Prerequisites

- Docker installed and running
- GNU Make (optional, but the repo provides a `Makefile`)

## Quick start

Using Make:

```bash
make run
```

Then open:

- http://localhost:8080/
- http://localhost:8080/users/

## Commands

### Build the image

```bash
make build
```

Equivalent Docker command:

```bash
docker build -t g-docker .
```

### Run the container

```bash
make run
```

Equivalent Docker command:

```bash
docker run -p 8080:80 g-docker
```

This maps your machine’s port `8080` to the container’s port `80`.

## Project structure

## Notes

- The container runs in the foreground by default. Stop it with `Ctrl+C`.
- To run in detached mode, use: `docker run -d -p 8080:80 g-docker`.