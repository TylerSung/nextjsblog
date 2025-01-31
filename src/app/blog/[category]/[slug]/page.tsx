import { formatDate, getBlogPosts } from "../../utils";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Container from "@/components/Container";
import { BreadcrumbDemo } from "@/components/Breadcrumb";
import ReportView from "@/components/home/reportView";
export async function generateStaticParams() {
  let posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

import { CustomMDX } from "@/components/ui/mdx";
const page = ({ params }: { params: { category: string; slug: string } }) => {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    notFound();
  }

  return (
    <>
      <ReportView
        slug={post.slug}
        title={post.metadata.title}
        category={post.metadata.category}
      />
      <Header>
        <Container>
          <BreadcrumbDemo category={post.metadata.category} slug={post.slug} />
          <h1 className="title font-semibold text-2xl  tracking-tighter mt-4">
            {post.metadata.title}
          </h1>
          <div className="flex justify-between items-center mt-2 mb-4 text-sm">
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              {formatDate(post.metadata.publishedAt)}
              <br />
              <br />
            </p>
          </div>
        </Container>
      </Header>
      <Container>
        <article className="prose">
          <CustomMDX source={post.content} />
        </article>
      </Container>
    </>
  );
};

export default page;
