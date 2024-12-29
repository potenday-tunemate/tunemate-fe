import PageLayout from "shared/components/Layout/PageLayout";

export default function NotFoundPage() {
  return (
    <PageLayout>
      <div className="flex flex-col justify-center items-center py-40">
        <h1>404 Not Found</h1>
        <p>페이지를 찾을 수 없습니다.</p>
      </div>
    </PageLayout>
  );
}
