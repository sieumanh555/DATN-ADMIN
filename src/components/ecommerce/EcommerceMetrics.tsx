"use client";
import React from "react";
import Badge from "../ui/badge/Badge";
import { ArrowDownIcon, ArrowUpIcon } from "@/icons";
import { UserIcon } from "@/icons";
import { UserGroupIcon } from "@heroicons/react/24/solid";
import {CircleStackIcon} from "@heroicons/react/24/solid";
import {Bars4Icon} from "@heroicons/react/24/solid";
import {Bars2Icon} from "@heroicons/react/24/solid";
import {Bars3BottomLeftIcon} from "@heroicons/react/24/solid";
import {Bars3BottomRightIcon} from "@heroicons/react/24/solid";
import {RectangleStackIcon} from "@heroicons/react/24/solid";
interface EcommerceMetricsProps {
  name1: string;
  name2: string;
  icon1Name?: string;
  icon2Name?: string;
  itemBackgroundColor1?: string; // Prop màu nền
  itemBackgroundColor2?: string; // Prop màu nền
}

const heroIcons = {
  UserIcon: UserIcon,
  UserGroupIcon: UserGroupIcon,
  CircleStackIcon: CircleStackIcon,
  Bars4Icon:Bars4Icon,
  Bars2Icon:Bars2Icon,
  Bars3BottomLeftIcon:Bars3BottomLeftIcon,
  Bars3BottomRightIcon:Bars3BottomRightIcon,
  RectangleStackIcon:RectangleStackIcon,
  // Thêm các icon khác bạn muốn sử dụng
};
type HeroIconKey = keyof typeof heroIcons;
export const EcommerceMetrics = (props: EcommerceMetricsProps) => {
  const Icon1 = props.icon1Name && heroIcons[props.icon1Name as HeroIconKey];
  const Icon2 = props.icon2Name && heroIcons[props.icon2Name as HeroIconKey];
  const itemStyle1 = {
    backgroundColor: props.itemBackgroundColor1,
  };
  const itemStyle2 = {
    backgroundColor: props.itemBackgroundColor2,
  };
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6" style={itemStyle1}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
          {Icon1 && <Icon1 className="size-6 text-gray-800 dark:text-white/90" />}
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props.name1}
            </span>
            <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
              3,782
            </h4>
          </div>
          <Badge color="success">
            <ArrowUpIcon />
            11.01%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}

      {/* <!-- Metric Item Start --> */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6" style={itemStyle2}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800">
          {Icon2 && <Icon2 className="size-6 text-gray-800 dark:text-white/90" />}
        </div>
        <div className="mt-5 flex items-end justify-between">
          <div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props.name2}
            </span>
            <h4 className="mt-2 text-title-sm font-bold text-gray-800 dark:text-white/90">
              5,359
            </h4>
          </div>

          <Badge color="error">
            <ArrowDownIcon className="text-error-500" />
            9.05%
          </Badge>
        </div>
      </div>
      {/* <!-- Metric Item End --> */}
    </div>
  );
};
