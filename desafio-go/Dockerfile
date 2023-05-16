# Etapa de Construção
FROM golang:alpine3.18 AS builder
WORKDIR /src
COPY . .
RUN go build app.go 

# Etapa de Execução
FROM scratch
COPY --from=builder /src/app /app
CMD ["./app"]