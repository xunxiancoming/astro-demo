import { useState } from 'preact/hooks';

export default function Greeting({messages}:{messages:string[]}) {
  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];
  const [greeting, setGreeting] = useState(randomMessage());

  return (
    <div>
      <h1>{greeting}！欢迎到访我的博客，我是一名野生前端工程师，如果你也喜欢前端开发，欢迎关注我的博客！</h1>
    </div>
  );
}