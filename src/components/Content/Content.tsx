import React, { useEffect, useState } from "react"
import s from "./Content.module.scss"
import menu from "../../img/menu.svg"
import pulse from "../../img/pulse.png"
import arrow from "../../img/black-arrow.svg"
import { BsSearch } from "react-icons/bs"
import { FaShieldAlt } from "react-icons/fa"
import { MdVpnLock } from "react-icons/md"
import { Loader, Modal } from "@mantine/core"
import { GrUpdate } from "react-icons/gr"
import { SiTorbrowser } from "react-icons/si"
import { TbBrowserOff } from "react-icons/tb"
import guard from "../../img/guard.jpg"

export const Content = () => {
  const [colors, setColors] = useState({
    first: "#f71919",
    second: "#de0909",
  })

  const [count, setCount] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [opened, setOpened] = useState(false)
  const [classNames, setClassName] = useState(`${s.shield}`)
  const clickHandler = () => {
    setClicked(true)
    setClassName(prev => `${prev} ${s.bounce}`)
  }
  useEffect(() => {
    let intervalId = 0
    if (clicked) {
      intervalId = setInterval(() => {
        setCount(prev => prev + 1)
      }, 100)
    }
    if (count === 100) {
      clearInterval(intervalId)
      setOpened(true)
    } else if (count === 75) {
      setColors({
        first: "#6af451",
        second: "#3bdc8f",
      })
    } else if (count === 50) {
      setColors({
        first: "#3bdc8f",
        second: "yellow",
      })
    } else if (count === 25) {
      setColors({
        first: "red",
        second: "yellow",
      })
    }
    return () => clearInterval(intervalId)
  }, [count, clicked])
  return (
    <>
      <Modal
        centered
        opened={opened}
        onClose={() => setOpened(false)}
        withCloseButton={false}
      >
        <div className={s.modal_box}>
          <img src={guard} alt='guard' />
          <h1 className={s.modal_title}>Scan of Installed Apps Completed</h1>
          <div className={s.modal_text}>
            <p>Files scanned:</p>
            <p className={s.bold}>74</p>
          </div>
          <div className={s.modal_text}>
            <p>Object quarantined:</p>
            <p className={s.bold}>0</p>
          </div>
          <div className={s.modal_text}>
            <p>Objects deleted:</p>
            <p className={s.bold}>0</p>
          </div>
          <div className={s.modal_text}>
            <p>Objects skipped:</p>
            <p className={s.bold}>0</p>
          </div>
          <div className={s.modal_text}>
            <p>Total time:</p>
            <p className={s.bold}>0:00:08</p>
          </div>
          <div className={s.modal_text}>
            <button
              className={`${s.modal_btn} ${s.modal_white}`}
              onClick={() => {
                setOpened(false)
              }}
            >
              OK
            </button>
          </div>
          <div className={s.modal_text}>
            <button className={s.modal_btn}>Get Automatic Antivirus</button>
          </div>
        </div>
      </Modal>
      <div className={s.box}>
        <div className={s.first_block}>
          <img src={menu} alt='menu' />
          <h1 className={s.title}>Kaspersky free</h1>
          <img src={pulse} alt='pulse' className={s.pulseIcon} />
        </div>
        <div className={classNames}>
          <p className={s.percents} style={{ color: colors.first }}>
            {count}%
          </p>
          <div className={s.white_block} style={{ bottom: `${-100 + count}%` }}></div>
        </div>
        <button className={s.btn} onClick={clickHandler}>
          {count === 100 ? "You're protected" : "Critical issue"}{" "}
          <img src={arrow} alt='arrow' className={s.arrow} />
        </button>
        <div className={s.second_block}>
          <h2 className={s.second_title}>Turn on 6 more features</h2>
          <div className={s.features}>
            <div className={s.feature}>
              {clicked && count !== 100 ? (
                <Loader color={"yellow"} />
              ) : (
                <BsSearch size={30} color='gold' />
              )}
              <p>Scan</p>
            </div>
            <div className={s.feature}>
              <FaShieldAlt size={30} color='gray' />
              <p>Automatic Anti-virus</p>
            </div>
            <div className={s.feature}>
              <MdVpnLock size={30} color='#18846C' />
              <p>VPN</p>
            </div>
          </div>
          <div className={s.features}>
            <div className={s.feature}>
              <GrUpdate size={30} color='gray' />
              <p>Update</p>
            </div>
            <div className={s.feature}>
              <SiTorbrowser size={30} color='gray' />
              <p>Safe Browsing</p>
            </div>
            <div className={s.feature}>
              <TbBrowserOff size={30} color='gold' />
              <p>App Lock</p>
            </div>
          </div>
        </div>
        <svg
          version='1.1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 500 500'
          width='100%'
          id='blobSvg'
          filter='blur(3px)'
          className={s.svg}
        >
          {" "}
          <defs>
            {" "}
            <linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
              {" "}
              <stop
                offset='0%'
                style={{ stopColor: colors.first, transition: "2s" }}
              ></stop>{" "}
              <stop
                offset='100%'
                style={{ stopColor: colors.second, transition: "2s" }}
              ></stop>{" "}
            </linearGradient>{" "}
          </defs>{" "}
          <path id='blob' className={s.blob} fill='url(#gradient)'>
            {" "}
            <animate
              attributeName='d'
              dur='10000ms'
              repeatCount='indefinite'
              values='M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;M453.78747,319.98894Q416.97789,389.97789,353.96683,436.87838Q290.95577,483.77887,223.95577,447.43366Q156.95577,411.08845,105.64373,365.97789Q54.33169,320.86732,62.67444,252.61056Q71.01719,184.3538,113.01965,135.21007Q155.02211,86.06634,220.52211,66.46683Q286.02211,46.86732,335.5,91.94472Q384.97789,137.02211,437.78747,193.51106Q490.59704,250,453.78747,319.98894Z;M411.39826,313.90633Q402.59677,377.81265,342.92059,407.63957Q283.24442,437.46649,215.13648,432.5428Q147.02853,427.61911,82.23325,380.9572Q17.43796,334.29529,20.45223,250.83809Q23.46649,167.38089,82.5856,115.05707Q141.70471,62.73325,212.19045,63.73015Q282.67618,64.72705,352.67308,84.79839Q422.66998,104.86972,421.43486,177.43486Q420.19974,250,411.39826,313.90633Z;M440.5,320.5Q418,391,355.5,442.5Q293,494,226,450.5Q159,407,99,367Q39,327,31.5,247.5Q24,168,89,125.5Q154,83,219.5,68Q285,53,335.5,94.5Q386,136,424.5,193Q463,250,440.5,320.5Z;'
            ></animate>{" "}
          </path>{" "}
        </svg>
      </div>
    </>
  )
}
