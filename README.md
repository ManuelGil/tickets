# TicketLeap
**TODO**
there problem when there is not message an ticket
The message are not saved when a ticket is created
## Commands

- Generate migration files

```
npx nx g @nrwl/nest:resource --project api --directory="app"
```

```
npm run make:migration -- --name=<name>
```

- Run migration

```
npm run migrate:run
```

- Revert migration

```
npm run migrate:revert
```

- Database seeding

```
npm run make:seed
```
