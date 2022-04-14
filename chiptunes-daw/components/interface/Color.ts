export type Color =
  | 'primary'
  | 'success'
  | 'error'
  | 'warning'
  | 'disabled'
  | 'dark';

export enum Colors {
    NORMAL_
}

$default-colors: (
  normal: $background-color,
  hover: #e7e7e7,
  shadow: #adafbc
) !default;
$disabled-colors: (
  normal: #d3d3d3,
  shadow: #adafbc
) !default;
$primary-colors: (
  normal: #209cee,
  hover: #108de0,
  shadow: #006bb3
) !default;
$success-colors: (
  normal: #92cc41,
  hover: #76c442,
  shadow: #4aa52e
) !default;
$warning-colors: (
  normal: #f7d51d,
  hover: #f2c409,
  shadow: #e59400
) !default;
$error-colors: (
  normal: #e76e55,
  hover: #ce372b,
  shadow: #8c2022
) !default;