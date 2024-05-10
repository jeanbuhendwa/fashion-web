import React from "react";
import { Img, Text, Heading, Input } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer {...props}>
      <div className="flex justify-center self-stretch bg-white-A700">
        <div className="container-xs flex items-center justify-center gap-[50px] md:flex-col md:p-5">
          <div className="flex flex-1 flex-col items-start gap-[26px] md:self-stretch">
            <Heading size="xl" as="h5">
              Our Newsletter
            </Heading>
            <Heading size="5xl" as="h1" className="w-full leading-[66px] !text-blue_gray-900_01">
              <>
                Subscribe to Our <br />
                Newsletter for Updates on
                <br />
                Our Latest Collection
              </>
            </Heading>
            <Text size="lg" as="p" className="!font-medium !text-gray-600">
              Get 20% off on your first order just by subscribing to our newsletter
            </Text>
            <Input shape="round" name="Email Input" placeholder={`Your business email`} className="w-[78%]" />
          </div>
          <Img
            src="images/img_two_fashion_lau.png"
            alt="fashion image"
            className="h-[509px] w-[36%] object-cover md:w-full"
          />
        </div>
      </div>
      <div className="flex justify-center self-stretch bg-blue_gray-900_01 py-10 sm:py-5">
        <div className="container-xs flex justify-center md:p-5">
          <div className="flex w-full flex-col gap-[107px] md:gap-20 sm:gap-[53px]">
            <div className="flex items-start justify-between gap-5 md:flex-col">
              <div className="flex w-[45%] flex-col gap-[37px] md:w-full">
                <Img
                  src="images/img_footer_logo.svg"
                  alt="footer logo"
                  className="h-[32px] object-contain md:w-[544px]"
                />
                <div className="flex flex-col gap-[18px]">
                  <Text as="p" className="leading-[26px] !text-white-A700">
                    Style Flows Here: Your Ultimate Fashion Destination! Explore Trendsetting Collections, Shop the
                    Latest Looks, and Let Your Fashion Flow with Us!
                  </Text>
                  <div className="flex items-center gap-2.5 self-start">
                    <Img src="images/img_lock_white_a700.svg" alt="lock icon" className="h-[24px] w-[24px]" />
                    <Text as="p" className="self-end !text-white-A700">
                      FashionFlow@Gmail.com
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex w-[45%] items-start justify-between gap-5 pr-[54px] md:w-full md:pr-5 sm:flex-col">
                <div className="flex flex-col gap-[15px]">
                  <Heading size="md" as="h6" className="!text-white-A700">
                    Product
                  </Heading>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="#">
                        <Text as="p">Landing pages</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Shop" target="_blank" rel="noreferrer">
                        <Text as="p">Shop</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Women" target="_blank" rel="noreferrer">
                        <Text as="p">Women</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Men" target="_blank" rel="noreferrer">
                        <Text as="p">Men</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Accessories" target="_blank" rel="noreferrer">
                        <Text as="p">Accessories</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex w-[42%] flex-col gap-[15px] sm:w-full">
                  <Heading size="md" as="h6" className="!text-white-A700">
                    Company
                  </Heading>
                  <ul className="flex flex-col gap-4">
                    <li>
                      <a href="About" target="_blank" rel="noreferrer">
                        <Text as="p">About</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <Text as="p">Privacy Policy</Text>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="leading-[26px]">
                        <Text as="p">Terms & Conditions</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Partners" target="_blank" rel="noreferrer">
                        <Text as="p">Partners</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Contact" target="_blank" rel="noreferrer">
                        <Text as="p">Contact</Text>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col items-start gap-[15px]">
                  <Heading size="md" as="h6" className="!text-white-A700">
                    Resources
                  </Heading>
                  <ul className="flex flex-col items-start gap-4">
                    <li>
                      <a href="Blog" target="_blank" rel="noreferrer">
                        <Text as="p">Blog</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Tools" target="_blank" rel="noreferrer">
                        <Text as="p">Tools</Text>
                      </a>
                    </li>
                    <li>
                      <a href="Support" target="_blank" rel="noreferrer">
                        <Text as="p">Support</Text>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between gap-5">
              <Text as="p" className="self-end !text-white-A700_cc">
                © 2020 All Right Reserved
              </Text>
              <div className="flex w-[11%] justify-between gap-5">
                <Img src="images/img_bx_bxl_instagram_alt.svg" alt="instagram icon" className="h-[24px] w-[24px]" />
                <Img src="images/img_akar_icons_twitter_fill.svg" alt="twitter icon" className="h-[24px] w-[24px]" />
                <Img src="images/img_akar_icons_linkedin_fill.svg" alt="linkedin icon" className="h-[24px] w-[24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
