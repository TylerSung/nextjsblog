"use client";
import { Icons } from "@/components/ui/icons";
import { Posts } from "@/lib/contents";
import Link from "next/link";
import { Input } from "./input";
import { createSubscriber } from "@/lib/actions";
import { useFormState } from "react-dom";

const Footer = () => {
  const initialState = { message: "", errors: {} };
  const [state, dispatch] = useFormState(createSubscriber, initialState);
  return (
    <footer className=" bg-gray-100 py-8 dark:bg-gray-800 mt-10">
      <div className="container  mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Icons.Logo className="h-6 w-6" />
              <span className=" text-md font-semibold'">Jax Song</span>
            </div>
            <p className=" text-gray-500 dark:text-gray-400 text-sm">
              随时了解最新动态
            </p>
            <div className="flex space-x-4">
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Icons.twitter className="SocialIcon" />
              </a>
              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icons.github className="SocialIcon" />
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className=" text-md font-semibold">博客</h3>
            <ul className=" space-y-2 text-sm">
              {Posts.map((post) => {
                return (
                  <li key={post.title}>
                    <Link href={post.href} className="SocialIcon">
                      {post.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-md font-semibold">联系</h3>
            <ul className=" space-y-2 text-sm">
              <li>
                <a
                  href="mailto:democaff@gmail.com"
                  className="SocialIcon hover:text-blue-500 hover:underline"
                >
                  邮箱:democaff@gmail.com
                </a>
              </li>
              <li>
                <Link href="/terms-of-services" className="SocialIcon">
                  使用条款
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="SocialIcon">
                  隐私政策
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className=" text-md font-semibold">订阅</h3>
            <p className="SocialIcon w-full">
              订阅文章，及时获取最新的新闻和更新。
            </p>
            <form action={dispatch}>
              <div className=" flex space-x-2">
                <Input
                  name="email"
                  id="email"
                  type="email"
                  className=" flex-1 mt-2"
                  placeholder="输入邮箱"
                  defaultValue=""
                  aria-describedby="email-error"
                />

                <button className=" ">订阅</button>
              </div>
              <div
                id="email-error"
                aria-label="polite"
                aria-atomic="true"
                className="px-1"
              >
                {state?.errors?.email &&
                  state.errors.email.map((error: string) => (
                    <p key={error} className="text-xs text-red-500">
                      {error}
                    </p>
                  ))}
                {!state?.errors?.email && (
                  <p className="text-xs text-green-500">{state?.message}</p>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-4 text-center text-xs text-gray-500 dark:border-gray-700 dark:text-gray-400">
          &copy;2024 Tyler Sung .ALL rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
