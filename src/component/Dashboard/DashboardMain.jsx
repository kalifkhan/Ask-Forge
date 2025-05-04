import React from "react";
import GenerateQueBank from "../questionGenerater/GenerateQueBank";
import {
  IconFileCertificate,
  IconFileCode,
  IconFileDislike,
  IconFileInvoice,
} from "tabler-icons";

const DashboardMain = () => {
  return (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <GenerateQueBank
        title="Generate Question Bank"
        iconComponent={<IconFileCertificate />}
        description="Covers 3D shapes and spatial reasoning."
        cardbtn={true}
        cardBtntext={"Generate"}
      />

      <GenerateQueBank
        title="Evalute Question Bank"
        iconComponent={<IconFileInvoice />}
        description="Covers variables, loops, and functions."
        cardbtn={true}
        cardBtntext={"Evalute"}
      />

      <GenerateQueBank
        title="Question Banks Created"
        iconComponent={<IconFileCode />}
        description="Practice passageskd deduction questions."
        cardbtn={true}
        cardBtntext={"12"}
      />
      <GenerateQueBank
        title="PD Conformance"
        iconComponent={<IconFileInvoice />}
        description="Practice passageskd deduction questions."
        cardbtn={false}
      />
    </div>
  );
};

export default DashboardMain;
