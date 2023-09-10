import {
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandTwitter,
  IconLink,
} from "@tabler/icons-react";

export function SNSMenu() {
  return (
    <div className="w-64 rounded-md border shadow-xl">
      <div className="divide-y text-gray-500">
        <div className="space-y-3 px-3 py-2.5 text-gray-500">
          <div className="flex items-center gap-x-2">
            <IconBrandTiktok size={16} stroke={1.5} />
            <div className="text-sm">TikTok</div>
          </div>
          <div className="flex items-center gap-x-2">
            <IconBrandTwitter size={16} stroke={1.5} />
            <div className="text-sm">Twitter</div>
          </div>
          <div className="flex items-center gap-x-2">
            <IconBrandFacebook size={16} stroke={1.5} />
            <div className="text-sm">Facebook</div>
          </div>
        </div>
        <div className="space-y-3 px-3 py-2.5 text-gray-500">
          <div className="flex items-center gap-x-2">
            <IconLink size={16} stroke={1.5} />
            <div className="text-sm">hogehoge.com</div>
          </div>
          <div className="flex items-center gap-x-2">
            <IconLink size={16} stroke={1.5} />
            <div className="text-sm">foobar.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
