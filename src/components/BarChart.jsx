// BarChart.jsx
import React from "react";
import { ResponsiveBar } from "@nivo/bar";

const BarChart = ({ data }) => {
  return (
    <div style={{ height: "400px" }}>
      <ResponsiveBar
        data={data}
        keys={["value"]}
        indexBy="Year"
        margin={{ top: 50, right: 130, bottom: 80, left: 80 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={["#FFC029"]}
        borderColor={{ from: "color", modifiers: [["darker", "1.6"]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Year",
          legendPosition: "middle",
          legendOffset: 32,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Pendapatan", // Ubah legenda sesuai kebutuhan
          legendPosition: "middle",
          legendOffset: -60,
        }}
        enableLabel={false}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        barAriaLabel={(e) =>
          `${e.id}: ${e.formattedValue} in Year: ${e.indexValue}`
        }
      />
    </div>
  );
};

export default BarChart;
