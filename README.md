# curso-typescript

npm init -y # cria um projeto node
npm i express # instalação da biblioteca
npm i -D typescript ts-node nodemon @types/express @types/node # instalação dos arquivos de definição
npx tsc --init


configs

```json
{
  "compilerOptions": {
    "outDir": "dist",
    "esModuleInterop": true,
    "module": "CommonJS",
    "moduleResolution": "Node",
    "baseUrl": "src",
  },
  "ts-node": {
    "esm": true
  },
}
```