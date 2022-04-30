import React from "react";
import { Select, Slider } from "antd";

const Filters = ({
  brandOptions = [],
  brand,
  onBrandChange,
  maxPrice = 6000,
  priceStep = 1,
  priceFilter,
  onPriceFilterChange,
  sortBy,
  onSortByChange,
}) => {
  const { Option } = Select;

  return (
    <div
      className="Filter"
      style={{
        width: "25%",
        marginTop: "20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Select
          style={{ width: 150 }}
          showSearch
          allowClear
          placeholder="Filter by brand"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          onChange={(value) => {
            onBrandChange(value);
          }}
          value={brand}
        >
          {brandOptions.map((brand) => (
            <Option value={brand}>{brand}</Option>
          ))}
        </Select>
        <span>Price:</span>
        <Slider
          range
          max={maxPrice}
          step={priceStep}
          defaultValue={priceFilter}
          onChange={onPriceFilterChange}
        />
        <Select
          style={{ width: 150 }}
          placeholder="Sort by"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          onChange={onSortByChange}
          value={sortBy}
        >
          <Option value="Ascending">Ascending</Option>
          <Option value="Descending">Descending</Option>
        </Select>
      </div>
    </div>
  );
};

export default Filters;
