"use client";

import styles from "./asesor.module.css";
import stylesTentang from "../tentang/tentang.module.css";
import { Typography } from "@mui/material";
import * as React from "react";

import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import {
  DEFAULT_OPTIONS,
  getTheme,
} from "@table-library/react-table-library/material-ui";
import { useSort } from "@table-library/react-table-library/sort";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// import dataAsesor from "./data.js";

const key = "Sort";

export default function AsesorTable() {
  let dataAsesor = [
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
    {
      name: "Euis Komalawati",
      bidang_skema: "Public Relation Coordinator",
      no_reg: "MET.000.001946 2019",
    },
  ];

  let [data, setData] = React.useState({ nodes: dataAsesor });
  const materialTheme = getTheme(DEFAULT_OPTIONS);
  const theme = useTheme(materialTheme);

  console.log(dataAsesor, "data");
  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortFns: {
        name: (array) => array.sort((a, b) => a.name.localeCompare(b.name)),
        bidang_skema: (array) =>
          array.sort((a, b) => a.bidang_skema.localeCompare(b.bidang_skema)),
        no_reg: (array) =>
          array.sort((a, b) => a.no_reg.localeCompare(b.no_reg)),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  const COLUMNS = [
    {
      label: "Nama Asesor",
      renderCell: (item) => item.name,
      sort: { sortKey: "name" },
    },
    {
      label: "No Reg / No MET",
      renderCell: (item) => item.no_reg,
      sort: { sortKey: "no_reg" },
    },
    {
      label: "Bidang Skema",
      renderCell: (item) => item.bidang_skema,
      sort: { sortKey: "bidang_skema" },
    },
  ];

  console.log(COLUMNS, "colum");
  return (
    <>
      <div className={`${stylesTentang.bannertentang}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <img
                className={`${stylesTentang.imgbannertentang}`}
                src="https://www.crayon.co/hs-fs/hubfs/new-bg.png?width=2566&height=781&name=new-bg.png"
              />
            </div>
            <div className="col-lg-6">
              <div>
                <Typography
                  sx={{
                    fontSize: "64px",
                    color: "#040924",
                    fontWeight: 600,
                    paddingBottom: "15px",
                  }}
                >
                  ASSESSOR
                </Typography>

                <Typography
                  sx={{
                    color: "#6f7375",
                    fontSize: "20px",
                    paddingBottom: "60px",
                  }}
                >
                  {" "}
                  List of Assessor
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.boxTable}`}>
        <CompactTable columns={COLUMNS} data={data} sort={sort} theme={theme} />
      </div>
    </>
  );
}
