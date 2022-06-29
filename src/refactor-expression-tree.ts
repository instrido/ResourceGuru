// Part 2 – Refactoring an expression tree
type TypeNode = number | ExpressionNode;
type TypeOperationCallback = (left: number, right: number) => number;

export class ExpressionNode {
  constructor(
    public operator: string,
    public operate: TypeOperationCallback,
    public left: TypeNode,
    public right: TypeNode
  ) {}

  public static add(left: number, right: number): number {
    return left + right;
  }

  public static subtract(left: number, right: number): number {
    return left - right;
  }

  public static multiply(left: number, right: number): number {
    return left * right;
  }

  public static divide(left: number, right: number): number {
    return left / right;
  }

  result(): number {
    const left =
      this.left instanceof ExpressionNode ? this.left.result() : this.left;
    const right =
      this.right instanceof ExpressionNode ? this.right.result() : this.right;
    return this.operate(left, right);
  }

  toString(): string {
    const left =
      this.left instanceof ExpressionNode ? this.left.toString() : this.left;
    const right =
      this.right instanceof ExpressionNode ? this.right.toString() : this.right;
    return `(${left} ${this.operator} ${right})`;
  }
}

export const AddNode = (left: TypeNode, right: TypeNode): ExpressionNode =>
  new ExpressionNode('+', ExpressionNode.add, left, right);
export const SubtractNode = (left: TypeNode, right: TypeNode): ExpressionNode =>
  new ExpressionNode('-', ExpressionNode.subtract, left, right);
export const MultiplyNode = (left: TypeNode, right: TypeNode): ExpressionNode =>
  new ExpressionNode('x', ExpressionNode.multiply, left, right);
export const DivideNode = (left: TypeNode, right: TypeNode): ExpressionNode =>
  new ExpressionNode('÷', ExpressionNode.divide, left, right);
