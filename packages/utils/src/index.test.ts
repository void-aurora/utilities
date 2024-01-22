import { describe, test, expect } from 'vitest';
import { checkReExporting } from '../../../scripts/test-helper';

describe('root index', () => {
  test('Re-Exporting', async () => {
    const { list } = await checkReExporting({ __dirname });
    list.forEach(node => {
      const { expected, received } = node;
      expect(expected).toEqual(received);
    });
  });
});
