import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { RepositoryMetadataProps } from '@/data/types/githubUserRepository'
import {
  ColumnDef,
  HeaderContext,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'
import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ProfileRepositoriesProps {
  githubUserReposData: RepositoryMetadataProps[]
  initialSortingState?: SortingState
}

export function ProfileRepositories({
  githubUserReposData,
  initialSortingState = [],
}: ProfileRepositoriesProps) {
  const [sorting, setSorting] = useState<SortingState>(initialSortingState)
  const navigate = useNavigate()

  const getHeader = useCallback(
    (headerLabel: string) =>
      ({ column }: HeaderContext<RepositoryMetadataProps, unknown>) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            {headerLabel}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    []
  )

  const columns: ColumnDef<RepositoryMetadataProps>[] = useMemo(
    () => [
      {
        id: 'name',
        accessorKey: 'name',
        header: getHeader('Name'),
      },
      {
        id: 'stargazers_count',
        accessorKey: 'stargazers_count',
        header: getHeader('Stars'),
      },
      {
        id: 'actions',
        cell: ({ row }) => {
          const repoName = row.original.name
          const owner = row.original.owner.login

          return (
            <div className="flex justify-end">
              <Button
                onClick={() => navigate(`/repository/${owner}/${repoName}`)}
              >
                Details
              </Button>
            </div>
          )
        },
      },
    ],
    [getHeader, navigate]
  )

  const table = useReactTable({
    data: githubUserReposData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    enableSorting: true,
    onSortingChange: setSorting,
    state: {
      sorting,
    },
  })

  return (
    <Table>
      <TableHeader>
        {table.getHeaderGroups().map((headerGroup) => (
          <TableRow key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <TableHead key={header.id}>
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </TableHead>
            ))}
          </TableRow>
        ))}
      </TableHeader>

      <TableBody>
        {table.getRowModel().rows?.length > 0 ? (
          table.getRowModel().rows?.map((row) => (
            <TableRow
              key={row.id}
              data-state={row.getIsSelected() && 'selected'}
            >
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell>
              <p className="font-semibold">No repositories found</p>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  )
}
