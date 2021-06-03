import {
  DataNode,
  Document,
  Element,
  NodeWithChildren,
  isTag,
} from 'domhandler';
import { ElementType } from 'htmlparser2';
import { getText } from 'domutils';

export * from 'domutils';

/**
 * Get the root element of the document.
 */
export function getDocumentElement(doc: Document): Element | undefined {
  return doc.children.find(isTag);
}

/**
 * Get the first level child elements of the element.
 */
export function getChildElements(
  node: NodeWithChildren,
  name?: string,
): Element[] {
  if (name) {
    return node.children.filter(
      (n): n is Element => isTag(n) && n.name === name,
    );
  }
  return node.children.filter(isTag);
}

/**
 * Get the inner text of the element.
 * Returns undefined when the element has any child element.
 */
export function getElementText(element: Element): string | undefined {
  if (getChildElements(element).length) {
    return undefined;
  }
  return getText(element);
}

/**
 * Create a standard XML directive node.
 * @returns \<?xml version="1.0" encoding="utf-8"?\>
 */
export function createStandardDirective(): DataNode {
  return new DataNode(
    ElementType.Directive,
    '?xml version="1.0" encoding="utf-8"?',
  );
}
