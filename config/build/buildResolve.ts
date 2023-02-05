import webpack, {ResolveOptions} from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";

export function buildResolve(): ResolveOptions {
  return  {
    extensions: ['.tsx', '.ts', '.js'],
  }
}