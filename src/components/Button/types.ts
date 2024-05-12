export type Props = {
  onClick?: () => void
  type?: ButtonTypesEnum
}

export enum ButtonTypesEnum {
  DEFAULT = "default",
  OUTLINED = "outlined"
}
