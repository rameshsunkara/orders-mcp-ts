# Changelog

## 0.1.0-alpha.1 (2025-08-24)

Full Changelog: [v0.0.1-alpha.0...v0.1.0-alpha.1](https://github.com/rameshsunkara/orders-mcp-ts/compare/v0.0.1-alpha.0...v0.1.0-alpha.1)

### Features

* **mcp:** add code execution tool ([b17bfb3](https://github.com/rameshsunkara/orders-mcp-ts/commit/b17bfb3d34b1377616bebcfa18e407a4697eff87))
* **mcp:** add logging when environment variable is set ([68bef2d](https://github.com/rameshsunkara/orders-mcp-ts/commit/68bef2d6a75a695b31495e65ada3a926d9f0cf45))
* **mcp:** add option to infer mcp client ([ed73677](https://github.com/rameshsunkara/orders-mcp-ts/commit/ed73677b857495e9ce32d1859cee48d996afef2f))
* **mcp:** add unix socket option for remote MCP ([a63bd3a](https://github.com/rameshsunkara/orders-mcp-ts/commit/a63bd3a29f507de6be46f68de68d01947e265c97))
* **mcp:** fallback for void-typed methods ([201e5b5](https://github.com/rameshsunkara/orders-mcp-ts/commit/201e5b5d12acbf679b1384d26e1f7ae541c95a8e))
* **mcp:** parse query string as mcp client options in mcp server ([4edf067](https://github.com/rameshsunkara/orders-mcp-ts/commit/4edf067ebe735811db62bcbcd45a9d0d3de47651))
* **mcp:** remote server with passthru auth ([7c86b2d](https://github.com/rameshsunkara/orders-mcp-ts/commit/7c86b2de64b3cd1f1f97eb10822cdee33d8f32bf))
* **mcp:** support filtering tool results by a jq expression ([25c114a](https://github.com/rameshsunkara/orders-mcp-ts/commit/25c114ac85c7ad35ba5db7fb21348f8c40951f93))


### Bug Fixes

* **mcp:** avoid sending `jq_filter` to base API ([1d776f4](https://github.com/rameshsunkara/orders-mcp-ts/commit/1d776f46b5d55ca2f6d053956aeac5967929d3f8))
* **mcp:** fix bug in header handling ([fc5ec17](https://github.com/rameshsunkara/orders-mcp-ts/commit/fc5ec17e28f2d33e640e170399e935838ff47751))
* **mcp:** include required section for top-level properties and support naming transformations ([ccf2fba](https://github.com/rameshsunkara/orders-mcp-ts/commit/ccf2fba8a1695aa4a5fb21f3b5d5fdf612a317e6))
* **mcp:** relax input type for asTextContextResult ([03bc589](https://github.com/rameshsunkara/orders-mcp-ts/commit/03bc58963a3cb3c0d8f100229828c842104118d7))
* **mcp:** reverse validJson capability option and limit scope ([92fa6a2](https://github.com/rameshsunkara/orders-mcp-ts/commit/92fa6a2761864f7cdd57854ddad9b926b609be83))
* **mcp:** support jq filtering on cloudflare workers ([6bb52fe](https://github.com/rameshsunkara/orders-mcp-ts/commit/6bb52fec139dbb2365b418df9bfa2599909d876c))


### Chores

* add docs to RequestOptions type ([49a2367](https://github.com/rameshsunkara/orders-mcp-ts/commit/49a2367284bb1016744fbf909866bca8cae99ee1))
* add package to package.json ([1b7ab04](https://github.com/rameshsunkara/orders-mcp-ts/commit/1b7ab04fd4f16d0fe4b539d2e37e27f8cdef67d2))
* **ci:** only run for pushes and fork pull requests ([5e3fb92](https://github.com/rameshsunkara/orders-mcp-ts/commit/5e3fb92a908ae5adbbe5d09de200c0deac2da177))
* **client:** improve path param validation ([f5dae4f](https://github.com/rameshsunkara/orders-mcp-ts/commit/f5dae4f1a095cae46b087246d6f96ab1ebdcccfb))
* **client:** qualify global Blob ([5206b3a](https://github.com/rameshsunkara/orders-mcp-ts/commit/5206b3ad5aadd1c36d647cd4e0dd7408bf5e0f27))
* configure new SDK language ([e8f8789](https://github.com/rameshsunkara/orders-mcp-ts/commit/e8f8789dd4434ce9a940f00b86669368951e2fd3))
* **deps:** update dependency @types/node to v20.17.58 ([06790e9](https://github.com/rameshsunkara/orders-mcp-ts/commit/06790e97ffc693eab868bc4cbbf29653e59f3adc))
* **internal:** codegen related update ([6f5f3b4](https://github.com/rameshsunkara/orders-mcp-ts/commit/6f5f3b413f2dfe3f0fe593ccdc15ab0cdb81907c))
* **internal:** codegen related update ([3b84e8a](https://github.com/rameshsunkara/orders-mcp-ts/commit/3b84e8a0e87f85286fe031f634b2f5965f79850e))
* **internal:** codegen related update ([c3cd3e5](https://github.com/rameshsunkara/orders-mcp-ts/commit/c3cd3e56c5c52749fb7c59c761d21f63b3b72ded))
* **internal:** codegen related update ([5d8fc4f](https://github.com/rameshsunkara/orders-mcp-ts/commit/5d8fc4f471042e844acd1e7515c28cf03daaf794))
* **internal:** formatting change ([9a755dd](https://github.com/rameshsunkara/orders-mcp-ts/commit/9a755ddb402646d5de11239006c66a793078b6d7))
* **internal:** make mcp-server publishing public by defaut ([acce0cf](https://github.com/rameshsunkara/orders-mcp-ts/commit/acce0cf6c47d59f96f565bc583f8160d21d88bb2))
* **internal:** move publish config ([cb1b54f](https://github.com/rameshsunkara/orders-mcp-ts/commit/cb1b54fc30f17c310d6f9ef068a2f699ea944079))
* **internal:** refactor array check ([36ca6d8](https://github.com/rameshsunkara/orders-mcp-ts/commit/36ca6d8f5b8ab3920eadd0e1b832dc0ffca5f429))
* **internal:** remove redundant imports config ([397a902](https://github.com/rameshsunkara/orders-mcp-ts/commit/397a9023808d746cfbe6f28cfa51cd553bc9275c))
* **internal:** update comment in script ([7092276](https://github.com/rameshsunkara/orders-mcp-ts/commit/7092276d242702a143c3d38f0cbb96122ad7ce79))
* make some internal functions async ([ee0a72a](https://github.com/rameshsunkara/orders-mcp-ts/commit/ee0a72aca00feced40af94f3926ea0f0fbb0ec38))
* **mcp:** add cors to oauth metadata route ([73ed961](https://github.com/rameshsunkara/orders-mcp-ts/commit/73ed961bf01b5d9cc29e0297ddcc4432563b97a6))
* **mcp:** document remote server in README.md ([5f443f1](https://github.com/rameshsunkara/orders-mcp-ts/commit/5f443f1f5e1022cbc87e8530e073201986ca87eb))
* **mcp:** formatting ([a7da9e3](https://github.com/rameshsunkara/orders-mcp-ts/commit/a7da9e3d3bbafc74ff3961f02484aa4833a9c0cd))
* **mcp:** minor cleanup of types and package.json ([4740735](https://github.com/rameshsunkara/orders-mcp-ts/commit/474073532543d4ecbe6348c9c9e441d6e5502f1a))
* **mcp:** refactor streamable http transport ([65bbc4d](https://github.com/rameshsunkara/orders-mcp-ts/commit/65bbc4d85caf68989000b9a64c689356f24b885b))
* **mcp:** rework imports in tools ([d431c84](https://github.com/rameshsunkara/orders-mcp-ts/commit/d431c84210cc703a2a12ce53665e2d8acbc45921))
* **mcp:** update package.json ([74595ad](https://github.com/rameshsunkara/orders-mcp-ts/commit/74595ad0bfe7aceac15e4488f79121ea04511e9f))
* **mcp:** update README ([481956d](https://github.com/rameshsunkara/orders-mcp-ts/commit/481956d3180c785d3e91ea132ad00007a948fa78))
* **mcp:** update types ([6577ec1](https://github.com/rameshsunkara/orders-mcp-ts/commit/6577ec14dc9846e0305a648b12032bda49b6ca3a))
* **ts:** reorder package.json imports ([d3426d8](https://github.com/rameshsunkara/orders-mcp-ts/commit/d3426d8eb7a3824de7850fbbdc16c7746c3fb8c9))
* update @stainless-api/prism-cli to v5.15.0 ([50b5cf4](https://github.com/rameshsunkara/orders-mcp-ts/commit/50b5cf42febdf84df1716f6e7c9b5f0e9ce38b7a))
* update CI script ([257756e](https://github.com/rameshsunkara/orders-mcp-ts/commit/257756e581480b0be3e07deab0895d8e1582999c))
* update SDK settings ([99ccbbf](https://github.com/rameshsunkara/orders-mcp-ts/commit/99ccbbf2644cd7eea1663db2411d6c536d4c79c8))
