FROM node:20.15 as builder
WORKDIR /app

RUN npm i -g pnpm@9

ARG GITHUB_TOKEN

RUN echo //npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN} >> ~/.npmrc && \
    echo //npm.pkg.github.com/journeyapps-platform/:_authToken=\${GITHUB_TOKEN} >> ~/.npmrc && \
    echo @journeyapps-platform:registry=https://npm.pkg.github.com/journeyapps-platform/ >> ~/.npmrc

COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY service/package.json service/tsconfig.json service/
COPY types/package.json types/tsconfig.json types/

RUN pnpm i --frozen-lockfile

COPY service/src service/src/
COPY types/src types/src/

RUN pnpm build:service
RUN find . -name 'node_modules' -type d -prune -exec rm -rf '{}' + && \
    pnpm install --frozen-lockfile --prod --ignore-scripts

# === PROD ===

FROM node:20.15-alpine
WORKDIR /app

COPY --from=builder /app/ ./

ARG SHA
ENV SHA=${SHA}
ENV NODE_ENV=production

CMD node --enable-source-maps service/dist/index.js
