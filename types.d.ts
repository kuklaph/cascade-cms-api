declare module "cascade-cms-api" {
  export function CascadeAPI(
    config: { apiKey: string; url: string },
    timeout?: number
  ): any;
}
