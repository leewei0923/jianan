import java.util.Stack;

public class MyQueue {
    Stack <Integer> stack1;
    Stack <Integer> stack2;
    public MyQueue() {
    stack1 = new Stack<>(); // 进栈
    stack2 = new Stack<>(); // 出栈
    }

    public void push(int x) {
        stack1.push(x);
    }

    public int pop() {
    dumpStack();
    return stack2.pop();
    }

    public int peek() {
        dumpStack();

        return stack2.peek();
    }

    public boolean empty() {
        return stack1.isEmpty() && stack2.isEmpty();
    }

    private void dumpStack() {
        if (stack2.isEmpty()) {
            while(!stack1.isEmpty()) {
                stack2.push(stack1.pop());
            }
        }
    }
}

class lee0124 {
     public static void main(String[] args) {
        MyQueue queue = new MyQueue();
        System.out.println(queue);
         queue.push(1);
         System.out.println('空');
         queue.push(2);
        System.out.println('空');
         System.out.println(queue.pop());
         System.out.println(queue.pop());
         System.out.println(queue.peek());
    }
}
