import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.leaderboard}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image alt="Mountains" src="/logo.webp" layout="fill" />
        </div>
        <h1 className={styles.title}>Q1</h1>

      </div>
      <table>
        <tr>
          <td>1</td>
          <td>LEC</td>
          <td>1:45.337</td>
        </tr>
        <tr>
          <td>2</td>
          <td>PIA</td>
          <td>+1.363</td>
        </tr>
        <tr>
          <td>3</td>
          <td>ALB</td>
          <td>+1.394</td>
        </tr>
        <tr>
          <td>4</td>
          <td>PER</td>
          <td>+2.276</td>
        </tr>
        <tr>
          <td>5</td>
          <td>GAS</td>
          <td>+2.278</td>
        </tr>
        <tr>
          <td>6</td>
          <td>NOR</td>
          <td>+2.629</td>
        </tr>
        <tr>
          <td>7</td>
          <td>SAR</td>
          <td>+2.735</td>
        </tr>
        <tr>
          <td>8</td>
          <td>TSU</td>
          <td>+2.798</td>
        </tr>
        <tr>
          <td>9</td>
          <td>DEV</td>
          <td>+3.032</td>
        </tr>
        <tr>
          <td>10</td>
          <td>BOT</td>
          <td>+3.161</td>
        </tr>
        <tr>
          <td>11</td>
          <td>SAI</td>
          <td>+3.303</td>
        </tr>
        <tr>
          <td>12</td>
          <td>HAM</td>
          <td>+3.501</td>
        </tr>
        <tr>
          <td>13</td>
          <td>MAG</td>
          <td>+3.519</td>
        </tr>
        <tr>
          <td>14</td>
          <td>SAR</td>
          <td>+3.558</td>
        </tr>
        <tr>
          <td>15</td>
          <td>HUL</td>
          <td>+3.814</td>
        </tr>
        <tr>
          <td>16</td>
          <td>VER</td>
          <td>+4.037</td>
        </tr>
        <tr>
          <td>17</td>
          <td>GUA</td>
          <td>+4.424</td>
        </tr>
        <tr>
          <td>18</td>
          <td>OCO</td>
          <td>+4.429</td>
        </tr>
        <tr>
          <td>19</td>
          <td>ALO</td>
          <td>+4.998</td>
        </tr>
        <tr>
          <td>20</td>
          <td>RUS</td>
          <td>+5.591</td>
        </tr>
      </table>
    </div>
  );
}
