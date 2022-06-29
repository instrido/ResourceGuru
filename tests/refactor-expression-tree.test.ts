import {
  AddNode,
  DivideNode,
  MultiplyNode,
  SubtractNode,
} from '../src/refactor-expression-tree';

test('Mathematical Expression Tree functions', () => {
  const tree = DivideNode(AddNode(7, MultiplyNode(SubtractNode(3, 2), 5)), 6);

  expect(tree.toString()).toBe('((7 + ((3 - 2) x 5)) ÷ 6)');
  expect(tree.result()).toBe(2);
});
