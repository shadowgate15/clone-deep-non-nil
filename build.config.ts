import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: ['src/index'],
  declaration: true,
  clean: true,
  rollup: {
    /* eslint-disable-next-line @typescript-eslint/naming-convention */
    emitCJS: true,
  },
})
