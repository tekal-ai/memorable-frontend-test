import { Typography, Row, Col, Grid } from "antd";
import { FC, useMemo } from "react";
import { SpinnerUI } from "src/app/features/operations/ui/spinner.ui";
import { useSectors } from "src/app/features/sectors/sectors.feature";
import CardPageUI from "src/app/ui/cards/card-page.ui";
import SectorUI from "src/app/ui/sector/sector.ui";

const { useBreakpoint } = Grid;

const SectorsPage: FC = () => {
  const viewport = useBreakpoint();

  const getColSpan = () => {
    if (viewport.md) {
      return 6;
    } else if (viewport.sm) {
      return 12;
    } else if (viewport.xs) {
      return 24;
    } else {
      return 4;
    }
  };

  const span = useMemo(() => getColSpan(), [viewport]);

  const { data, loading } = useSectors();

  return (
    <CardPageUI>
      <Typography.Title level={2}>Sectors</Typography.Title>
      {!loading && (
        <Row
          gutter={[
            { xs: 8, sm: 16, md: 24, lg: 32 },
            { xs: 8, sm: 16, md: 24, lg: 32 },
          ]}
        >
          {data?.map((item) => (
            <Col className="gutter-row" span={span} key={item.id}>
              <SectorUI sectorCount={item.count || 0} sectorName={item.name} />
            </Col>
          ))}
        </Row>
      )}
      {loading && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
          }}
        >
          <SpinnerUI />
        </div>
      )}
    </CardPageUI>
  );
};
export default SectorsPage;
