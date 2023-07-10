"use client";

import * as React from "react";

import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";

const key = "Composed Table";

export default function PendingPayment() {
  let data = [
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
    {
      nama_asesi: "budianto",
      ktp: "ktp.jpg",
      ijazah: "ijazah.jpg",
      pasfoto: "pasfoto.jpg",
      buktibayar: "buktibayar.jpg",
      status_pembayaran: "pending",
    },
  ];
  const [dataSkema, setSkema] = React.useState({ nodes: [] });
  React.useEffect(() => {
    setSkema(() => {
      return {
        nodes: data,
      };
    });
  }, []);
  const theme = useTheme(getTheme());

  return (
    <Table data={dataSkema} theme={theme}>
      {(tableList) => (
        <>
          <Header>
            <HeaderRow>
              <HeaderCell>Nama Asesi</HeaderCell>
              <HeaderCell>KTP</HeaderCell>
              <HeaderCell>Ijazah</HeaderCell>
              <HeaderCell>Pas Foto</HeaderCell>
              <HeaderCell>Bukti Bayar</HeaderCell>
              <HeaderCell>Status Pembayaran</HeaderCell>
            </HeaderRow>
          </Header>

          <Body>
            {tableList.map((item, i) => (
              <Row key={i}>
                <Cell>{item.nama_asesi}</Cell>
                <Cell>{item.ktp}</Cell>
                <Cell>{item.ijazah}</Cell>
                <Cell>{item.pasfoto}</Cell>
                <Cell>{item.buktibayar}</Cell>
                <Cell>{item.status_pembayaran}</Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
  );
}
