import { FC } from 'react'
import { Inspector, InspectorProps } from 'react-dev-inspector'

//#region component Types
export interface DevInspectorProps extends InspectorProps {
  /**
   * @description 默认采用环境变量判断。当出现你位于开发环境,但环境变量中没有设置 NODE_ENV 时。
   * @default false
   */
  isDev?: boolean
}
//#endregion component Types

//#region component
export const DevInspector: FC<DevInspectorProps> = (props) => {
  const { isDev = false, ...restProps } = props
  const envIsDev = process.env.NODE_ENV === 'development'
  const isDevOrForceOpen = envIsDev || isDev
  return (
    <>
      {isDevOrForceOpen && <Inspector keys={['control', 'shift', 'command', 'c']} {...restProps} />}
    </>
  )
}
//#endregion component
