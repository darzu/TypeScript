# node-pty doesn't build on node 12 right now, so we lock to 10
FROM node:10
RUN git clone --depth 1 https://github.com/xtermjs/xterm.js.git /xtermjs
WORKDIR /xtermjs
COPY --from=typescript/typescript /typescript/typescript-*.tgz /typescript.tgz
RUN mkdir /typescript
RUN tar -xzvf /typescript.tgz -C /typescript
RUN npm i typescript@/typescript/package
RUN npm install
# Set entrypoint back to bash (`node` base image made it `node`)
ENTRYPOINT [ "/bin/bash", "-c" , "exec \"${@:0}\";"]
# Build
CMD npm run build