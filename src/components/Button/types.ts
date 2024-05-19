export type Props = {
  onClick?: () => void
  type?: ButtonTypesEnum
  className?: string
}

export enum ButtonTypesEnum {
  DEFAULT = "default",
  OUTLINED = "outlined"
}
