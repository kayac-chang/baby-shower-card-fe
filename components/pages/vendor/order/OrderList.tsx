// @ts-nocheck
import { NextRouter } from "next/router";
import { mockData } from "api";
import Form from "components/elements/form";
import { TopSection } from "./TopSection";
import { StickyHeadTable } from "./table";

const SortOptions = [
  { id: "0", label: "訂單編號(由新到舊)", value: "orderNo-asc" },
  { id: "1", label: "訂單編號(由舊到新)", value: "orderNo-desc" },
  { id: "2", label: "日期時間(由新到舊)", value: "createdAt-asc" },
  { id: "3", label: "日期時間(由舊到新)", value: "createdAt-desc" },
  { id: "4", label: "手機號碼(由新到舊)", value: "phone-asc" },
  { id: "5", label: "手機號碼(由舊到新)", value: "phone-desc" },
];

type Props = {
  router: NextRouter;
};

export const VendorOrderPage = ({ router }: Props): JSX.Element => {
  const postSearch = (data: { keyword: string }) => {
    console.log(data);
  };

  const pushPage = (id: string) => {
    router.push(`/vendor/order/${id}`);
  };

  return (
    <div>
      <TopSection onSubmit={postSearch} pushPage={pushPage} />

      <div className="mt-4 flex flex-col items-end ">
        <div className="w-1/3">
          <Form.Input
            type="select"
            name="sort"
            options={SortOptions}
            onChange={(e) => console.log(e)}
          />
        </div>
      </div>

      <div className="mt-4 w-full overflow-x-scroll rounded-t-md">
        <div className="w-full min-w-228">
          <StickyHeadTable data={mockData} pushPage={pushPage} />
        </div>
      </div>
    </div>
  );
};
