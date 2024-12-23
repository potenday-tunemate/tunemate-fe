import Header from "shared/components/layout/Header";
import PageLayout from "shared/components/layout/PageLayout";

export default function GenrePage() {
  return (
    <PageLayout>
      <Header backPath="/main" />
      <div className="mt-12 px-24 flex flex-col space-y-50">
        <div>
          <h2>새로운 신보!</h2>
        </div>
        <div>
          <h2>후기가 많이 올라오고 있어요!</h2>
        </div>
        <div>
          <h2>name님에게 추천해요!</h2>
        </div>
      </div>
    </PageLayout>
  );
}
