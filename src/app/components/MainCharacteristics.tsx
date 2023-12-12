import React from "react";

export default function MainCharacteristics() {
  return (
    <table className="table-auto">
      <caption className="caption-top">Характеристики</caption>
      <tbody>
        <tr>
          <td>Мощность (кВт)</td>
          <td>0,12</td>
        </tr>
        <tr>
          <td>Частота вращения (об/мин)</td>
          <td>1500</td>
        </tr>
        <tr>
          <td>Монтажное исполнение</td>
          <td>Лапы (IM1001/IM1081/IMB3)</td>
        </tr>
        <tr>
          <td>Iп/Iн</td>
          <td>4,4</td>
        </tr>
        <tr>
          <td>Mmax/Mн</td>
          <td>2,2</td>
        </tr>
        <tr>
          <td>Вес (кг)</td>
          <td>5</td>
        </tr>
      </tbody>
    </table>
  );
}
