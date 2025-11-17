/*
 * Copyright 2025 Daytona Platforms Inc.
 * SPDX-License-Identifier: AGPL-3.0
 */

import { DataSource } from 'typeorm'
import { join } from 'path'
import { config } from 'dotenv'
import { baseDataSourceOptions } from '../data-source'

config({ path: [join(__dirname, '../../../.env'), join(__dirname, '../../../.env.local')] })

const PreDeployDataSource = new DataSource({
  ...baseDataSourceOptions,
  migrations: [join(__dirname, '/*-migration.{ts,js}')],
})

export default PreDeployDataSource
