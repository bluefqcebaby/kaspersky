import React, { useState } from "react"
import s from "./Terms.module.scss"
import arrow from "../../img/arrow.svg"
import { Loader, Modal } from "@mantine/core"
import { useNavigate } from "react-router-dom"

export const Terms = () => {
  const [opened, setOpened] = useState(false)
  const [inputState, setInputState] = useState({
    first: false,
    second: false,
  })
  const redirect = useNavigate()
  const changeHandler = (e: React.FormEvent<HTMLInputElement>) => {
    const elem = e.target as HTMLInputElement
    setInputState(prev => {
      return {
        ...prev,
        [elem.name]: elem.checked,
      }
    })
  }

  const clickHandler = () => {
    setOpened(true)
    setTimeout(() => {
      redirect("/permissions")
    }, 3000)
  }
  return (
    <>
      <Modal opened={opened} onClose={() => {}} withCloseButton={false} centered>
        <div className={s.modal_box}>
          <Loader color={"green"} />
          <p>Starting Kaspersky...</p>
        </div>
      </Modal>
      <div className={s.box}>
        <h1 className={s.title}>Terms and conditions</h1>
        <p className={s.text}>
          I confirm that I have fully read, understand, and accept the terms and
          conditions of the following documents:
        </p>
        <div className={s.term_box}>
          <label className={s.term}>
            <input
              type='checkbox'
              className={s.checkInput}
              checked={inputState.first}
              onChange={changeHandler}
              name='first'
            />
            <span className={s.checkInput_style}></span>
            <p className={s.term_text}>End User License Agreement</p>
          </label>
          <a href='#' className={s.link}>
            <img src={arrow} alt='arrow' className={s.arrow} />
          </a>
        </div>
        <div className={s.term_box}>
          <label className={s.term}>
            <input
              type='checkbox'
              className={s.checkInput}
              checked={inputState.second}
              onChange={changeHandler}
              name='second'
            />
            <span className={s.checkInput_style}></span>
            <div className={s.text_box}>
              <p className={s.term_text}>Products and Services Privacy Policy</p>
              <p className={s.text_mini}>
                I am aware and agree that my data will be handled and transmitted
                (includind to third countries) as described in the Privacy Policy. I
                confrim that I have fulle read and understand the Privacy Policy.
              </p>
            </div>
          </label>
          <a href='#' className={s.link}>
            <img src={arrow} alt='arrow' className={s.arrow} />
          </a>
        </div>
        <p className={`${s.text} ${s.break}`}>Optional</p>
        <div className={s.term_box}>
          <label className={s.term}>
            <input type='checkbox' className={s.checkInput} />
            <span className={s.checkInput_style}></span>
            <p className={s.term_text}>Kaspersky Security Network Statemant</p>
          </label>
          <a href='#' className={s.link}>
            <img src={arrow} alt='arrow' className={s.arrow} />
          </a>
        </div>
        <div className={s.term_box}>
          <label className={s.term}>
            <input type='checkbox' className={s.checkInput} />
            <span className={s.checkInput_style}></span>
            <p className={s.term_text}>
              Statement Regarding Data Processing for Marketin Purposes
            </p>
          </label>
          <a href='#' className={s.link}>
            <img src={arrow} alt='arrow' className={s.arrow} />
          </a>
        </div>
        {inputState.first && inputState.second ? (
          <button className={s.btn} onClick={clickHandler}>
            Confirm
          </button>
        ) : (
          <button className={s.btn} disabled>
            Confirm
          </button>
        )}
      </div>
    </>
  )
}
