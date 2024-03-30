import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.outer}>
      <div className={styles.leaderboard}>
        <div className={styles.header}>
          <div className={styles.logo}>
            <Image alt="Mountains" src="/logo.webp" layout="fill" />
          </div>
          <h1 className={styles.title}>RACE</h1>
        </div>
        <div className={styles.lapcounter}>
      LAP <strong>3</strong>/54
        </div>
        <table>
          <tr>
            <td>1</td>
            <td>VER</td>
            <td>Leader</td>
          </tr>
          <tr>
            <td>2</td>
            <td>LEC</td>
            <td>+0.250</td>
          </tr>
          <tr>
            <td>3</td>
            <td>HAM</td>
            <td>+0.300</td>
          </tr>
          <tr>
            <td>4</td>
            <td>NOR</td>
            <td>+0.350</td>
          </tr>
          <tr>
            <td>5</td>
            <td>SAI</td>
            <td>+0.400</td>
          </tr>
          <tr>
            <td>6</td>
            <td>RUS</td>
            <td>+0.450</td>
          </tr>
          <tr>
            <td>7</td>
            <td>PER</td>
            <td>+0.500</td>
          </tr>
          <tr>
            <td>8</td>
            <td>BOT</td>
            <td>+0.550</td>
          </tr>
          <tr>
            <td>9</td>
            <td>OCO</td>
            <td>+0.600</td>
          </tr>
          <tr>
            <td>10</td>
            <td>ALO</td>
            <td>+0.650</td>
          </tr>
          <tr>
            <td>11</td>
            <td>RIC</td>
            <td>+0.700</td>
          </tr>
          <tr>
            <td>12</td>
            <td>STR</td>
            <td>+0.750</td>
          </tr>
          <tr>
            <td>13</td>
            <td>VET</td>
            <td>+0.800</td>
          </tr>
          <tr>
            <td>14</td>
            <td>GAS</td>
            <td>+0.850</td>
          </tr>
          <tr>
            <td>15</td>
            <td>TSU</td>
            <td>+0.900</td>
          </tr>
          <tr>
            <td>16</td>
            <td>ALB</td>
            <td>+0.950</td>
          </tr>
          <tr>
            <td>17</td>
            <td>ZHO</td>
            <td>+1.000</td>
          </tr>
          <tr>
            <td>18</td>
            <td>MAG</td>
            <td>+1.050</td>
          </tr>
          <tr>
            <td>19</td>
            <td>MSC</td>
            <td>+1.100</td>
          </tr>
          <tr>
            <td>20</td>
            <td>LAT</td>
            <td>+1.150</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
