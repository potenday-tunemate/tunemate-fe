import { Link } from "react-router-dom";
import Container from "shared/components/layout/Container";
import Header from "shared/components/layout/Header";
import PageLayout from "shared/components/layout/PageLayout";

const ALBUM_DATA = [
  {
    id: "4aawyAB9vmqN3uQ7FjRGTy",
    title: "rosierosierosierosierosie",
    coverImg: null,
    artist: {
      id: 0,
      name: "string",
      img: "string",
      bornYear: 0,
      createdAt: "2024-12-23T15:40:36.957Z",
      updatedAt: "2024-12-23T15:40:36.957Z",
    },
    year: 0,
    createdAt: "2024-12-23T15:40:36.957Z",
    updatedAt: "2024-12-23T15:40:36.957Z",
  },
  {
    id: 2,
    title: "rosie",
    coverImg: null,
    artist: {
      id: 0,
      name: "string",
      img: "string",
      bornYear: 0,
      createdAt: "2024-12-23T15:40:36.957Z",
      updatedAt: "2024-12-23T15:40:36.957Z",
    },
    year: 0,
    createdAt: "2024-12-23T15:40:36.957Z",
    updatedAt: "2024-12-23T15:40:36.957Z",
  },
  {
    id: 3,
    title: "rosie",
    coverImg: null,
    artist: {
      id: 0,
      name: "string",
      img: "string",
      bornYear: 0,
      createdAt: "2024-12-23T15:40:36.957Z",
      updatedAt: "2024-12-23T15:40:36.957Z",
    },
    year: 0,
    createdAt: "2024-12-23T15:40:36.957Z",
    updatedAt: "2024-12-23T15:40:36.957Z",
  },
  {
    id: 4,
    title: "rosie",
    coverImg: null,
    artist: {
      id: 0,
      name: "string",
      img: "string",
      bornYear: 0,
      createdAt: "2024-12-23T15:40:36.957Z",
      updatedAt: "2024-12-23T15:40:36.957Z",
    },
    year: 0,
    createdAt: "2024-12-23T15:40:36.957Z",
    updatedAt: "2024-12-23T15:40:36.957Z",
  },
  {
    id: 5,
    title: "rosie",
    coverImg: null,
    artist: {
      id: 0,
      name: "string",
      img: "string",
      bornYear: 0,
      createdAt: "2024-12-23T15:40:36.957Z",
      updatedAt: "2024-12-23T15:40:36.957Z",
    },
    year: 0,
    createdAt: "2024-12-23T15:40:36.957Z",
    updatedAt: "2024-12-23T15:40:36.957Z",
  },
  {
    id: 6,
    title: "rosie",
    coverImg: null,
    artist: {
      id: 0,
      name: "string",
      img: "string",
      bornYear: 0,
      createdAt: "2024-12-23T15:40:36.957Z",
      updatedAt: "2024-12-23T15:40:36.957Z",
    },
    year: 0,
    createdAt: "2024-12-23T15:40:36.957Z",
    updatedAt: "2024-12-23T15:40:36.957Z",
  },
];

export default function GenrePage() {
  return (
    <PageLayout>
      <Header backPath="/main" />

      <Container>
        <div className="mt-12 flex flex-col space-y-50">
          <div>
            <h2>새로운 신보!</h2>

            <div className="mt-24">
              <div className="flex space-x-16 overflow-x-auto">
                {ALBUM_DATA.map((album) => (
                  <Link
                    to={`/genre/detail/${album.id}`}
                    className="flex flex-col"
                  >
                    <div
                      key={album.title}
                      className="flex-shrink-0 w-130 h-130 rounded-10 overflow-hidden"
                    >
                      {album.coverImg ? (
                        <img
                          src={album.coverImg}
                          alt={album.title}
                          className="w-full h-full object-coverImg"
                        />
                      ) : (
                        <div className="w-130 h-130 bg-customGray-850"></div>
                      )}
                    </div>

                    <div className="mt-16 w-130">
                      <p className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                        {album.title}
                      </p>
                      <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        {album.artist.name}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2>후기가 많이 올라오고 있어요!</h2>

            <div className="mt-24">
              <div className="flex space-x-16 overflow-x-auto">
                {ALBUM_DATA.map((album) => (
                  <div className="flex flex-col">
                    <div
                      key={album.title}
                      className="flex-shrink-0 w-130 h-130 rounded-10 overflow-hidden"
                    >
                      {album.coverImg ? (
                        <img
                          src={album.coverImg}
                          alt={album.title}
                          className="w-full h-full object-coverImg"
                        />
                      ) : (
                        <div className="w-130 h-130 bg-customGray-850"></div>
                      )}
                    </div>

                    <div className="mt-16 w-130">
                      <p className="font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                        {album.title}
                      </p>
                      <p className="text-sm whitespace-nowrap overflow-hidden text-ellipsis">
                        {album.artist.name}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h2>name님에게 추천해요!</h2>
          </div>
        </div>
      </Container>
    </PageLayout>
  );
}
