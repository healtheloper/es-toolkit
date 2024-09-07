export interface DocumentationItem {
  name: string;
  description: string;
  signature: string;
  parameters: Array<{
    name: string;
    type: string;
    document: string;
  }> | null;
  returns: {
    type: string;
    document: string;
  } | null;
  exampleCodes: string[];
}