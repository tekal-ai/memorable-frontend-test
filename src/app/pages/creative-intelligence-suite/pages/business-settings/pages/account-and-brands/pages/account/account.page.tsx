import { Avatar, Descriptions, Divider, List } from "antd";
import { FC } from "react";
import EditBusinessModalPage from "./pages/edit-business/edit-business.modal.page";
import useSWR from "swr";
import { useBusinessDomain } from "src/domain/business/business.domain";

const AccountPage: FC = () => {
  const { getBusinessAccount } = useBusinessDomain();

  const { data: businessAccount } = useSWR(
    "gettingBusinessAccount",
    getBusinessAccount,
  );

  if (!businessAccount) return <></>;

  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={[businessAccount]}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.businessLogoUrl} size={54} />}
              title={<span>{item.businessName}</span>}
              description={`Business ID: ${item.id}`}
            />
          </List.Item>
        )}
      />

      <Divider />

      <div>
        <div className="flex">
          <Descriptions title="Business detail" />
          <EditBusinessModalPage />
        </div>
        <Descriptions title="" layout="vertical" bordered>
          <Descriptions.Item label="Legal business name">
            {businessAccount.businessName}
          </Descriptions.Item>
          <Descriptions.Item label="Address">
            {businessAccount.address}
          </Descriptions.Item>
          <Descriptions.Item label="Business phone">
            {businessAccount.businessPhone}
          </Descriptions.Item>
          <Descriptions.Item label="Website">
            {businessAccount.website}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};
export default AccountPage;
