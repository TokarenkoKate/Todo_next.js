"use client"

import "./filter-buttons.css"
import { useState } from "react"
import { getFilters } from "@/store/tasks/selectors"
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { resetFilters, setFilterActive } from "@/store/tasks/tasks"
import FilterButton from "./filter-button/filter-button"

export default function FilterButtons() {
  const filtersData = useAppSelector(getFilters)
  const dispatch = useAppDispatch()

  const [activeButtonValue, setActiveButtonValue] = useState("all")

  const handleSetActiveButtonValue = (buttonValue: string) => {
    setActiveButtonValue(buttonValue)
    if (buttonValue !== "all") {
      dispatch(setFilterActive({ filterValue: buttonValue }))
    } else {
      dispatch(resetFilters())
    }
  }

  return (
    <section className="page__container filter-buttons">
      <ul className="filter-buttons__list">
        <FilterButton
          key="all"
          value="all"
          title="All tasks"
          activeButtonValue={activeButtonValue}
          onClickSetButtonActive={handleSetActiveButtonValue}
        />
        {filtersData.map((filter) => (
          <FilterButton
            key={filter.title}
            value={filter.filterValue}
            title={filter.title}
            activeButtonValue={activeButtonValue}
            onClickSetButtonActive={handleSetActiveButtonValue}
          />
        ))}
      </ul>
    </section>
  )
}
