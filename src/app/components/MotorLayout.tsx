import React from "react";
import Image from "next/image";

export default function MotorLayout() {
  return (
    <>
      <p className="mt-3">
        Монтажное исполнение: Лапы (1001/1081), (IM 1001/IM 1081), IM B3
      </p>
      <h3>Присоединительные размеры</h3>
      <Image
        src="/obshepromishlennij_elektrodvigatel_5ai_56_a4_13.png"
        width={400}
        height={200}
        alt="layout"
      />

      <table className="table-auto text-center">
        <tbody>
          <tr>
            <td>l1</td>
            <td>l10</td>
            <td>l31</td>
            <td>d1</td>
            <td>d10</td>
            <td>b1</td>
            <td>b10</td>
            <td>h1</td>
            <td>h5</td>
            <td>h10</td>
            <td>h</td>
          </tr>
          <tr>
            <td>23</td>
            <td>71</td>
            <td>36</td>
            <td>11</td>
            <td>6</td>
            <td>4</td>
            <td>90</td>
            <td>4</td>
            <td>12.5</td>
            <td>7</td>
            <td>56</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
